# 203. 移除链表元素
https://leetcode.cn/problems/remove-linked-list-elements/submissions/538850863/
## 两种解法
```js
var removeElements = function(head, val) {
    // let l1 = new ListNode()
    // l1.next = head
    // let p = l1
    // while(p && p.next) {
    //     let f = false
    //     if(p.next.val === val){
    //         p.next = p.next.next
    //     } else {
    //         p = p.next
    //     }
    // }
    // return l1.next

    if(head === null) return head
    head.next = removeElements(head.next, val)
    return head.val == val ? head.next : head
};
```
