//1st solution: Iterative Approach

//Time complexity: O(n)
//Space complexity: O(1)


const removeElements = function(head, val) {
   if(head==null)
       {
           return head;
       }
   let temp=head;
        while(temp.next!=null)
        {
            if(temp.next.val==val)
            {
                temp.next=temp.next.next;
            }
            else
            {
               temp=temp.next;      
            }
          }
        return head.val==val?head.next:head;
    };



//2nd Solution: D&C approach

//Time complexity: O(n)
//Space complexity: O(1)


const removeElements = function(head, val) {
 if (head == null || (head.next == null && head.val == val)) {
          return null;
        }

        for (;head != null && head.val == val; head = head.next);

        var curr = head;

        while (curr != null && curr.next != null) {
          if (curr.next.val == val) {
            curr.next = curr.next.next;
          } else {
            curr = curr.next;
          }
        }

        return head;
    };
    
    
/*
Success
Details 
Runtime: 92 ms, faster than 79.81% of JavaScript online submissions for Remove Linked List Elements.
Memory Usage: 43.6 MB, less than 45.98% of JavaScript online submissions for Remove Linked List Elements.
*/
