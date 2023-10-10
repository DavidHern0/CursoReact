import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { Language, fromLanguage } from '../types'

// interface Props {
//     onChange: (language: Language) => void
// }

type Props = 
| {type: 'from', value: fromLanguage, onChange: (language: fromLanguage) => void }
| {type: 'to', value: Language, onChange: (language: Language) => void }
    

export const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select aria-larabel='Selecciona el idioma' onChange={handleChange} value={value}>
            {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}