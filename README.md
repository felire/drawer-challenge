Drawer Cahllenge: 

Things could have been improved: 
- I did not make a translateY of the whole nav when the drawer is opened, the reason why I did not do that is this:
   - I'd had to implement something global probably with a provider in order to catch the open event and execute the translateY animation. 
   - I wouldn't have been able to resolve everything with the useDrawerProgress hook. 
   - I think it would have added too much more complexity to the code and it was not needed.
- Styling
- Isolating styles in styles.ts file. 
- Internal header of the stack inside the drawer (this needs a design), maybe just keeping the stack and using the slice effect to open the drawer. 

I did not do that in order to save my time, but most of things were achieved. 

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZuYnpoZ3lhZDFhYTY0OTBlN2U4dTc5OG9senIxNjJ1eTYydWRzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNJCdbbR8OvFASRMR4/giphy.gif)