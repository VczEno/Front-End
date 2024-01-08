export const ArrayComponent= (props) => {
    return(
        <>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Cognome </th>
                    <th>Città</th>
                </tr>
                {props.users.map(ele => <tr>
                    <td>{ele.name}</td>
                    <td>{ele.lastName}</td>
                    <td>{ele.city}</td>
                </tr>)}
                
            </table>
        </>
    )
}