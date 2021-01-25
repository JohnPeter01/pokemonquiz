import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'

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
  return( 
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1>POKEMON QUIZ</h1>
        </Widget.Header>
      <Widget.Content>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        </Widget.Content>
      </Widget>
      <Widget>
      <Widget.Content>
      <h1>POKEMON QUIZ</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        </Widget.Content>
      </Widget>
      <Footer />
    </QuizContainer>
    <GithubCorner projectUrl=""/>
  </QuizBackground>
  )
}
