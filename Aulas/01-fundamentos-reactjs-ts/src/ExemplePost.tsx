/**
 * props: { author: '', content: ''}
 * 
 * function Post(props) {
    return (
        <div>
            <strong>{props.author}
            </strong><p>{props.content}</p>
        </div>
    )
}
 * 
 * export default App

// Default Exports VS Named Exports

// export default App
// export function Post()

export function Post(props) {
    return (
        <div>
            <strong>{props.author}
            </strong><p>{props.content}</p>
        </div>
    )
}
 *  
*/ 



