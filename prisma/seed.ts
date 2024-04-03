import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'ef779b42-4b72-4e3d-8390-2b60e49c6b46',
      title: 'Dev night',
      slug: 'dev-night',
      details: 'Evento para amantes de codar durante a noite.',
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database seeded.')
  prisma.$disconnect()
})
