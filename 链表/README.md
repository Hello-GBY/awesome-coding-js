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
# 141. 环形链表
https://leetcode.cn/problems/linked-list-cycle/
## 进阶解法， 空间复杂度 O(1) 的情况

```js
var hasCycle = function(head) {
    let p = new Set()
     while(head){
        if(p.has(head)) return true
        p.add(head)
        head = head.next
     }
     return false

    // let fast = head
    // let last = head
    // while(fast && fast.next){
        
    //     fast = fast.next.next;
    //     last = last.next;
    //     if(fast === last) return true
    // }
    // return false

    // let cur = head
    // let res= false
    // while(cur) {
    //     if(cur.f){
    //         res = true
    //          break;
    //     }
    //      cur.f = true
    //     cur = cur.next
    // }
    // return res
};

```