import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

const users = [
    {
        userName: 'davidhern0',
        name: 'David Hernández',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel',
        isFollowing: true
    },
]
export function App() {
    return (
        <section className='app'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                    ></TwitterFollowCard>
                ))
            }
        </section>
    )
}