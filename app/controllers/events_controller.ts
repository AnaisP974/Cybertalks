/* eslint-disable prettier/prettier */
import type { HttpContext } from '@adonisjs/core/http'

export default class EventsController {
  async eventShow({ view }: HttpContext) {
        return view.render('pages/events', {
            'title' : 'Tous les évènements Cybertalks',
            'speakers' : [
                {'name': 'Martin JSX'},
                {'name': 'Sabine ESX'},
                {'name': 'Pierre de TypeScript'},
                {'name': 'Amanda Python'},
                {'name': 'Albert Symfony'}
            ],
        })
    }
}