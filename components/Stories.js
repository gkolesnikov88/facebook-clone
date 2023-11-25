import React from 'react'
import StoryCard from './StoryCard';

// mock list
const stories = [
    {
        name: 'Bill Gates',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg/800px-Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg',
        profile: 'https://scontent.fayt2-3.fna.fbcdn.net/v/t39.30808-6/404309105_916787023145564_8821763138561689622_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YCLDojzjoaYAX8JEkDW&_nc_ht=scontent.fayt2-3.fna&oh=00_AfCwZ_oqG8nJSLMJCoTsfbrcknGGPYCkMgIkKPMjLo4Uaw&oe=65666ABF'
    },
    {
      name: 'Elon Musk',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg',
      profile: 'https://scontent.fayt2-1.fna.fbcdn.net/v/t39.30808-6/382455245_122095695560060878_796991074110125711_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Nwl6o_8zycoAX9cAIjH&_nc_ht=scontent.fayt2-1.fna&oh=00_AfAo068gVXzVQ6JjCsYVcGuWDr6m8KKR2ltY793R3kV-Kw&oe=65669937'
    },
    {
      name: 'Bill Gates',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg/800px-Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg',
      profile: 'https://scontent.fayt2-3.fna.fbcdn.net/v/t39.30808-6/404309105_916787023145564_8821763138561689622_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YCLDojzjoaYAX8JEkDW&_nc_ht=scontent.fayt2-3.fna&oh=00_AfCwZ_oqG8nJSLMJCoTsfbrcknGGPYCkMgIkKPMjLo4Uaw&oe=65666ABF'
    },
    {
      name: 'Bill Gates',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg/800px-Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg',
      profile: 'https://scontent.fayt2-3.fna.fbcdn.net/v/t39.30808-6/404309105_916787023145564_8821763138561689622_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YCLDojzjoaYAX8JEkDW&_nc_ht=scontent.fayt2-3.fna&oh=00_AfCwZ_oqG8nJSLMJCoTsfbrcknGGPYCkMgIkKPMjLo4Uaw&oe=65666ABF'
    },
    {
      name: 'Bill Gates',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg/800px-Bill_Gates_-_World_Economic_Forum_Annual_Meeting_Davos_2008.jpg',
      profile: 'https://scontent.fayt2-3.fna.fbcdn.net/v/t39.30808-6/404309105_916787023145564_8821763138561689622_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YCLDojzjoaYAX8JEkDW&_nc_ht=scontent.fayt2-3.fna&oh=00_AfCwZ_oqG8nJSLMJCoTsfbrcknGGPYCkMgIkKPMjLo4Uaw&oe=65666ABF'
    }
]; 

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map(story => (
            <StoryCard 
              key={story.src} 
              name={story.name} 
              src={story.src} 
              profile={story.profile}
            />
        ))}
    </div>
  )
}

export default Stories