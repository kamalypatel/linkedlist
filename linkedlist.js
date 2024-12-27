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

    const size = () => {

        if (!head) {
            return 0
        }

        let current = head
        let counter = 1
        while(current.getNextNode()) {
            counter++
            current = current.getNextNode()
        }
        return counter
    }

    const headFinder = () => head

    const tailFinder = () => {

        if (!head) {
            return null
        }

        let current = head
        while(current.getNextNode()) {
            current = current.getNextNode()
        }
        return current
    }

    const at = (index) => {
        if (!head) {
            return null
        }

        let current = head
        for (let i = 0; i < index; i++) {
            current = current.getNextNode()
        }
        return current.getName()
    }

    return {append, prepend, size, headFinder, tailFinder, at}
}