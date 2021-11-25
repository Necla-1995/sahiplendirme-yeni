import { Form, Button } from 'react-bootstrap';
import { HayvanContext } from '../context/HayvanContext';
import { useContext, useState } from 'react'

const AddForm = () => {

    const { addHayvan } = useContext(HayvanContext);

    const [name, setName] = useState("");
    const [bdaymonth, setBdayMonth] = useState("");
    const [info, setInfo] = useState("");
    const [Tel, setTel] = useState("");
    const [adres, setAdres] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addHayvan(name, bdaymonth, info, Tel, adres)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Hayvanın İsmi</Form.Label>
                <Form.Control type="Text" name="name" value={name} onChange={e => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Hayvan İle İlgili Kısa Bilgi Giriniz</Form.Label>
                <Form.Control as="textarea" rows={3} name="info" value={info} onChange={e => setInfo(e.target.value)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Hayvanın Doğum Tarihi</Form.Label>
                <Form.Control type="month" name="bdaymonth" value={bdaymonth} onChange={e => setBdayMonth(e.target.value)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tel:</Form.Label>
                <Form.Control type="text" name="Tel" value={Tel} onChange={e => setTel(e.target.value)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Adres</Form.Label>
                <Form.Control as="textarea" rows={3} name="adres" value={adres} onChange={e => setAdres(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">Hayvan Ekle</Button>
        </Form>
    )
}

export default AddForm;