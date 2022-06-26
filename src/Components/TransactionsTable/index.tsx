import { Container } from "./styles";

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de wesite</td>
                        <td className="desposit">R$10000,00</td>
                        <td>Trabalho</td>
                        <td>05/01/2022</td>
                    </tr>
                    <tr>
                        <td>Carro</td>
                        <td className="withdraw">- R$650</td>
                        <td>Financiamento</td>
                        <td>10/01/2022</td>
                    </tr>
                    <tr>
                        <td>Parcela do computador</td>
                        <td className="withdraw">- R$588</td>
                        <td>Pessoal</td>
                        <td>08/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}