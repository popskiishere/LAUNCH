import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  req: Request,
  { params }: { params: { expertId: string } }
) {
  try {
    const expert = await prisma.expert.findUnique({
      where: { id: params.expertId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    if (!expert) {
      return NextResponse.json(
        { error: 'Expert not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(expert)
  } catch (error) {
    console.error('Error fetching expert:', error)
    return NextResponse.json(
      { error: 'Error fetching expert details' },
      { status: 500 }
    )
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { expertId: string } }
) {
  try {
    const { bio, expertise, hourlyRate } = await req.json()

    // Check if expert exists
    const existingExpert = await prisma.expert.findUnique({
      where: { id: params.expertId },
    })

    if (!existingExpert) {
      return NextResponse.json(
        { error: 'Expert not found' },
        { status: 404 }
      )
    }

    // Update expert profile
    const updatedExpert = await prisma.expert.update({
      where: { id: params.expertId },
      data: {
        bio,
        expertise,
        hourlyRate,
      },
    })

    return NextResponse.json(updatedExpert)
  } catch (error) {
    console.error('Expert update error:', error)
    return NextResponse.json(
      { error: 'Error updating expert profile' },
      { status: 500 }
    )
  }
} 