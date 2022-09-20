
export default function first({ fill }) {

    return (
        <svg width="100" height="30">
            <rect rx="5" ry="5" width="100" height="30"
                style={{'fill':`${fill}`,'stroke':'black','strokeWidth':1}} />
        </svg>
    )

}