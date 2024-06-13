// 一个简单的链表
// let LinkNodeList
class Node {
    constructor()  {
        this.value = val
        this.next = null
    }
}

class LinkNodeList {
    constructor() {
        this.head =null
    }
    append(val) {
        if(this.head === null) {
            this.head = new Node(val)
            return
        } 
        // 循环找到最后一个节点
        let current = this.head
        while(current && current.next) {
            current = current.next
        }
        current.next = new Node(val)
    }
}

let linkNode = new LinkNodeList()
linkNode.append(1)
linkNode.append(1)
linkNode.append(1)
linkNode.append(1)




// 删除链表数据