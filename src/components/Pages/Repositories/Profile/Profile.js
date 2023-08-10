import {Container, Header, Avatar, Login, Name, Inner, Data} from './style';
import {MdPerson, MdGroups, MdLocationPin, MdLink} from 'react-icons/md';
import PropTypes from 'prop-types';

function Profile({ user }){
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url}/>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroups size={20}/>
          {user.followers}&nbsp; <i>seguidores</i>&nbsp; &middot;&nbsp; {user.following}&nbsp; <i>seguindo</i>
        </Data>
        <Data>
        <MdPerson size={20}/> {user.name}
        </Data>
        <Data>
          <MdLocationPin size={20} /> {user.location}
        </Data>
          {user.blog && <Data>
        <MdLink size={20} /><a href={`\\${user.blog}`}>{user.blog}</a>
        </Data>}
          {user.company && <Data>
        <MdLink size={20} /><a href={`\\${user.company}`}>{user.company}</a>
        </Data>}
      </Inner>
    </Container>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  })
}

export default Profile;