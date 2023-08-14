import {Title, Container, Selector, Cleaner} from './style';
import PropTypes from 'prop-types';

function Filter({ languages, currentLanguage, onClick }){
  const selectors = languages.map((lang) => (
    <Selector 
    key={lang.name.toLowerCase()}
    color={lang.color}
    className={currentLanguage === lang.name ? 'selected' : ''}
    onClick={() => onClick && onClick(lang.name)}
    >
      <span>{lang.name}</span>
      <span>{lang.count}</span>
    </Selector>
  ))

  return (
    <>
    <Title>Filter</Title>
    <Container>
      {selectors}
      <Cleaner
      onClick={() => onClick && onClick(undefined)}
      >Apagar</Cleaner>
    </Container>
    </>
  )
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null
}

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func
}

export default Filter;