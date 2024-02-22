import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, Form } from "react-bootstrap";

function Content() {
      
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages]   = useState([]);

  const getProvinces = async (event: any) => {
    const selectedProvince = event.target.value
    const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`);
    const data = await res.json();
    setRegencies(data);
  }

  const getRegencies = async (event: any) => {
    const selectedRegencies = event.target.value
    const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencies}.json`);
    const data = await res.json();
    setDistricts(data);
  }
  const getDistricts = async (event: any) => {
    const selectedDistricts = event.target.value
    const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistricts}.json`);
    const data = await res.json();
    setVillages(data);
  }
  const getVillages = async (event: any) => {
    const selectedVillages = event.target.value
    const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedVillages}.json`);
    const data = await res.json();
    setVillages(data);
  }

  useEffect(() => {
    const fetchProvinces = async () => {
      const res = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
      const data = await res.json();
      setProvinces(data);
    }

    fetchProvinces()
  }, [])
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Card className="w-50 mt-5 p-3 shadow-lg">
            <h3 className='fw-semibold mb-3'>Data Wilayah Indonesia</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupSelect">
                <Form.Label className='fw-semibold'>Provinsi</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={getProvinces}>
                    <option>Pilih Provinsi</option>
                    {provinces.map((province: any) => (
                      <option key={province.id} value={province.id}>{province.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupSelect">
                <Form.Label className='fw-semibold'>Kabupaten/Kota</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={getRegencies}>
                    <option>Pilih Kabupaten/Kota</option>
                    {regencies.map((regency: any) => (
                      <option key={regency.id} value={regency.id}>{regency.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupSelect">
                <Form.Label className='fw-semibold'>Kecamatan</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={getDistricts}>
                    <option>Pilih Kecamatan</option>
                    {districts.map((district: any) => (
                      <option key={district.id} value={district.id}>{district.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupSelect">
                <Form.Label className='fw-semibold'>Kelurahan</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={getVillages}>
                    <option>Pilih Kelurahan</option>
                    {villages.map((village: any) => (
                      <option key={village.id} value={village.id}>{village.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                
            </Form>   
          </Card>
        </Row>
      </Container>
    )
}

export default Content


