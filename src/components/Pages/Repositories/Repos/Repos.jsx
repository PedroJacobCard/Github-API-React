import {Container} from './style';
import Repository from './Repository/Repository';
import PropTypes from 'prop-types';

function Repos({ repositories, currentLanguage }) {

  const repos = repositories
  .filter(
    repository => 
    currentLanguage === undefined || repository.language === currentLanguage
    )
  .map(
    repository => (
    <Repository key={repository.id} repository={repository}/>
  ));


  return(
    <Container>
      {repos}
    </Container>
  )
}

Repos.defaultProps = {
  currentLanguage: undefined,
}

Repos.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      languages: PropTypes.string
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string
}

export default Repos;