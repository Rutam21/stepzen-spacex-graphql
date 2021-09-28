import './index.css';
import { gql, useQuery } from '@apollo/client';
import StepZenLogo from '../light-blue.svg';
const GET_QUERY = gql`
  query MyQuery   {
    capsule(id: "C105") {
      id
      landings
      original_launch
      reuse_count
      missions {
        flight
        name
      }
    }
  }
`;

function Rockets() {
    const { loading, error, data } = useQuery(GET_QUERY);
    console.log('DATA', data)

    if (loading) return <p>Loading ...</p>;

    if (error) return (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    );
    const rockets = data['rcockets'];
    return (
        <div className="App">
            <header className="App-header">
                <img src={StepZenLogo} alt="StepZen Logo" width="200px" />
                <p style={{ marginTop: "40px" }}>Top 10 Rockets information:</p>
                <p>
                    <ul>
                        <li>Rockets</li>
                    </ul>
                </p>
            </header>
        </div>
    );
}

export default Rockets;
