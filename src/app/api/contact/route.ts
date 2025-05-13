import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// Validation function for email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validation function for input fields
function validateInput(name: string, email: string, message: string): string | null {
  if (!name || name.trim().length < 2) {
    return 'Name must be at least 2 characters long'
  }
  if (!email || !isValidEmail(email)) {
    return 'Please provide a valid email address'
  }
  if (!message || message.trim().length < 10) {
    return 'Message must be at least 10 characters long'
  }
  return null
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Validate input
    const validationError = validateInput(name, email, message)
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      )
    }

    // Create contact submission
    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        message: message.trim(),
        status: 'NEW',
      },
    })

    // Return success response
    return NextResponse.json({
      message: 'Contact form submitted successfully',
      contactId: contact.id
    }, { status: 201 })

  } catch (error) {
    console.error('Contact submission error:', error)
    
    // Handle specific errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { error: 'This email has already submitted a request recently' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Error submitting contact form' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    // Build where clause
    const where = status ? { 
      status: status.toUpperCase()
    } : {}

    // Get total count for pagination
    const total = await prisma.contact.count({ 
      where: where as { status?: 'NEW' | 'IN_PROGRESS' | 'RESPONDED' | 'CLOSED' }
    })

    // Get contacts with pagination
    const contacts = await prisma.contact.findMany({
      where: where as { status?: 'NEW' | 'IN_PROGRESS' | 'RESPONDED' | 'CLOSED' },
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        message: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return NextResponse.json({
      contacts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Error retrieving contact submissions' },
      { status: 500 }
    )
  }
} 