# riot-pure-props
 Riot helper for getting props in pure components.

Compatible with Riot.js 5

---
Usage example:

```javascript
<raw>
    <script> 
        import { pure } from 'riot;
        import getProps from 'riot-pure-props';

        export default pure(({ attributes, slots, props }) => {
            return {
                mount(el, context) {
                    this.root = el;
                    this.props = getProps(this.root, context, attributes, props);

                    this.render();
                },

                update(context) {
                    this.props = getProps(this.root, context, attributes, props);

                    this.render();
                },

                render() {
                    this.root.innerHTML = this.props.content;
                }
            }
        });
    </script>
</raw>
```
