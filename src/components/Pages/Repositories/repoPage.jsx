import { Loading, LoadingProfileTop, LoadingProfileMidle, LoadingProfileBottom, LoadingPict, LoadingText1, LoadingText2, LoadingText3, Container, Main, Sidebar } from "./style";
import Profile from "./Profile/Profile";
import Filter from "./Filter/Filter";
import Repos from "./Repos/Repos";
import PropTypes from "prop-types";
//import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, getRepos, getLangsFrom } from "../Services/api";

function RepositoriesPage({login}){
  const [currentLanguage, setCurrentLanguage] = useState();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));
      setLoading(false);
    };

    loadData();
  },[login]);


  const onFilterClick = (language) => {
    setCurrentLanguage(language)
  }

  if(loading) {
    return (
    <Loading>
      <LoadingProfileTop>
        <LoadingPict></LoadingPict>
        <LoadingText1></LoadingText1>
      </LoadingProfileTop>
      <LoadingProfileMidle>
        <LoadingText2></LoadingText2>
        <LoadingText1></LoadingText1>
        <LoadingText3></LoadingText3>
      </LoadingProfileMidle>
      <LoadingProfileBottom>
        {window.innerWidth >= 768 ? (
          <>
            <LoadingText3></LoadingText3>
            <LoadingText3></LoadingText3>
            <LoadingText3></LoadingText3>
            <LoadingText3></LoadingText3>
          </>
        ) : (
          <>
            <LoadingText1></LoadingText1>
            <LoadingText1></LoadingText1>
            <LoadingText1></LoadingText1>
            <LoadingText1></LoadingText1>
          </>
        )}
      </LoadingProfileBottom>
    </Loading>
    )
  }

  return (
      <Container>
        <Sidebar>
          { user ? <Profile user={user}/> : <p>Carregando...</p>}
          <Filter 
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
          />
        </Sidebar>
        <Main>
          <Repos currentLanguage={currentLanguage} repositories={repositories}/>
        </Main>
      </Container>
  )
}

RepositoriesPage.propTypes = {
  login: PropTypes.string,
}

export default RepositoriesPage;