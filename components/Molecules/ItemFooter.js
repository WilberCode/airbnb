const ItemFooter = ({title,list}) => {
    return (
        <div className="space-y-4 text-sm text-gray-800 " >
            <h5  className="font-bold" >{title}</h5>
            <ul>
                {list.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default ItemFooter
