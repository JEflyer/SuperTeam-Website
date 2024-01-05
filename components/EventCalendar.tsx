import React from 'react'

interface Event {
  id: string
  date: string // Assuming ISO format for simplicity
  title: string
  description: string
}

interface EventCalendarProps {
  events: Event[]
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  // A simple function to format the event date, you can replace it with a library like date-fns or moment.js
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className='my-4'>
      <div className='text-lg font-semibold mb-2'>Upcoming Events</div>
      {events.length > 0 ? (
        <ul>
          {events.map(event => (
            <li key={event.id} className='mb-3 p-2 border-b border-gray-200'>
              <div className='font-bold'>{formatDate(event.date)}</div>
              <div className='text-md'>{event.title}</div>
              <p className='text-sm text-gray-600'>{event.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  )
}

export default EventCalendar
