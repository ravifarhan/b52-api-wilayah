// import { useState, useEffect } from "react"
import MyNavbar from "./component/Navbar"
// import Content from "./component/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Card, Form } from "react-bootstrap";
import Content from "./component/Content";


function App() {
  // const [provinces, setProvinces] = useState([]);
  // const [regencies, setRegencies] = useState([]);
  // // const [districts, setDistricts] = useState([]);
  // // const [villages, setVillages]   = useState([]);

  // const getProvinces = async (event: any) => {
  //   const selectedProvince = event.target.value
  //   const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`);
  //   const data = await res.json();
  //   setRegencies(data);
  // }

  // const getRegencies = async (event: any) => {
  //   const selectedRegencies = event.target.value
  //   const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencies}.json`);
  //   const data = await res.json();
  //   setDistricts(data);
  // }

  // useEffect(() => {
  //   const fetchProvinces = async () => {
  //     const res = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
  //     const data = await res.json();
  //     setProvinces(data);
  //   }

  //   fetchProvinces()
  // }, [])


  return (
    <>
    <MyNavbar/>
    <Content/>
    {/* <Container fluid>
      <h3 className='text-center mt-5'>Data Wilayah Indonesia</h3>
        <Row className="justify-content-center">
          <Card className="w-50 mt-3 p-4 shadow">
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
                
            </Form>   
          </Card>
        </Row>
    </Container> */}

    </>
  )
}

export default App


