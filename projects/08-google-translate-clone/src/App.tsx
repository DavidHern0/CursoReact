import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'


function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()

  return (
    <Container fluid>
      <h1>Google Translate 2</h1>

      <Row>
        <Col>
          <h2>From</h2>
          <LanguageSelector
            type='from'
            value={fromLanguage}
            onChange={setFromLanguage} />
        </Col>
        <Col>
          <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <h2>To</h2>
          <LanguageSelector
            type='to'
            value={toLanguage}
            onChange={setToLanguage} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
