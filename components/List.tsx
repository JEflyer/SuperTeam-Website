import React from 'react'

// Base list item properties
interface BaseListItem {
  id: string
  type: 'resource' | 'job' | 'project'
  title: string
  description: string
}

// Specific type for educational resources
interface ResourceItem extends BaseListItem {
  type: 'resource'
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

// Specific type for job opportunities
interface JobItem extends BaseListItem {
  type: 'job'
  companyName: string
  location: string
}

// Specific type for community projects
interface ProjectItem extends BaseListItem {
  type: 'project'
  contributors: number
  status: 'Active' | 'Completed' | 'Upcoming'
}

// Union type for list items
type ListItem = ResourceItem | JobItem | ProjectItem

interface ListProps {
  items: ListItem[]
  renderItem: (item: ListItem) => JSX.Element
}

// List component
const List: React.FC<ListProps> = ({ items, renderItem }) => {
  return (
    <div className='list-container'>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id} className='mb-4'>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  )
}

export default List
