import data from "./data.json"
import './index.css'

const UserList = () => {
    const userData = data.map(element => {
        return (
            <div key={element._id} className="user">
                <h3>{element.name.first}</h3>
                <h4>{element.name.last}</h4>
          </div>
      )
    })
    return <div className="users-list">{ userData }</div>
}

export default UserList