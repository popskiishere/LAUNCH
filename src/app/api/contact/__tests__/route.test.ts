import { POST, GET } from '../route'
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

// Mock Prisma
jest.mock('@/lib/db', () => ({
  prisma: {
    contact: {
      create: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
    },
  },
}))

describe('Contact API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('POST /api/contact', () => {
    it('should create a contact submission with valid data', async () => {
      const mockContact = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
        status: 'NEW',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      // Mock Prisma create
      ;(prisma.contact.create as jest.Mock).mockResolvedValue(mockContact)

      const request = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'This is a test message',
        }),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(201)
      expect(data.message).toBe('Contact form submitted successfully')
      expect(data.contactId).toBe('1')
    })

    it('should return validation error for invalid email', async () => {
      const request = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'John Doe',
          email: 'invalid-email',
          message: 'This is a test message',
        }),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toBe('Please provide a valid email address')
    })
  })

  describe('GET /api/contact', () => {
    it('should return paginated contact submissions', async () => {
      const mockContacts = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Test message 1',
          status: 'NEW',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]

      // Mock Prisma findMany and count
      ;(prisma.contact.findMany as jest.Mock).mockResolvedValue(mockContacts)
      ;(prisma.contact.count as jest.Mock).mockResolvedValue(1)

      const request = new Request('http://localhost:3000/api/contact?page=1&limit=10')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.contacts).toHaveLength(1)
      expect(data.pagination).toEqual({
        total: 1,
        page: 1,
        limit: 10,
        totalPages: 1,
      })
    })
  })
}) 