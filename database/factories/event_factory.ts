import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'
import { SpeakerFactory } from './speaker_factory.js'

export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs(),
      isOnline: faker.datatype.boolean(),
      date: faker.date.future(),
    }
  })
  .relation('speakers', () => SpeakerFactory)
  .build()
