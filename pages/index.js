/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width:500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <title>Quiz para mestres pokemons.</title>
        <meta name="title" content="Quiz para mestres pokemons." />
        <meta name="description" content="Você se considera um mestre no mundo pokemon? Teste seus conhecimentos." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quiz para mestres pokemons." />
        <meta property="og:description" content="Você se considera um mestre no mundo pokemon? Teste seus conhecimentos." />

        <meta property="og:image" content="https://pokemongolive.com/img/posts/anniversaryposter2019.jpg" />
        <meta property="og:image:secure_url" content="https://pokemongolive.com/img/posts/anniversaryposter2019.jpg" />
        s
        <meta property="og:image:alt" content="Imagem comemorativa de 3anos do pokemon go." />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Quiz para mestres pokemons." />
        <meta property="twitter:description" content="Você se considera um mestre no mundo pokemon? Teste seus conhecimentos." />
        <meta property="twitter:url" content="https://pokemongolive.com/img/posts/anniversaryposter2019.jpg" />
        <meta property="twitter:image" content="https://pokemongolive.com/img/posts/anniversaryposter2019.jpg" />

      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <input 
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Diz ai seu nome"
                  />
                <button type="submit" disabled={name.length === 0}>
                  Jogar { name }
                </button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <p>
                Lorem Ipsum has been the industry standard dummy...
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/JohnPeter01" />
      </QuizBackground>
    </>
  );
}
