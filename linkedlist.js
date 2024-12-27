function node (value = null) {
    let name = value
    let nextNode = null

    const getName = () => name
    const getNextNode = () => nextNode
    const setName = newName => { name = newName }
    const setNextNode = newNode => { nextNode = newNode }

    return {getName, getNextNode, setName, setNextNode}
}


function linkedList () {
    let head = null

    const append = (value) => {
        const newNode = node(value)

        if (!head) {
            head = newNode
            return
        }

        let current = head
        while(current.getNextNode()) {
            current = current.getNextNode()
        }

        current.setNextNode(newNode)
    }

    const prepend = (value) => {
        const newNode = node(value)

        if (!head) {
            head = newNode
            return
        }

        newNode.setNextNode(head)
        head = newNode
    }

    return {append, prepend}
}