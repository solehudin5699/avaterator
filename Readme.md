# Generator Avatar

Simple api to generates an avatar image from a name.

## Usage

```html
<img src="http://localhost:8000/?name=John%20Doe" alt="John Doe" />
```

### Query Parameters

- `name` (required): The name to generate the avatar from.
- `size` (optional): The size of the avatar image. Default is 100.
- `background` (optional): The background color of the avatar image. If color is hex, don't include the "**#**", example: ?background=2970ff. Default is random.
- `color` (optional): The color of the text. If color is hex, don't include the "**#**", example: ?color=fff. Default is random.
- `bold` (optional): Whether the text should be bold. Default is normal. Value: 'bold' | 'normal' | (number)
- `shape` (optional): The shape of the avatar. Default is circle. Value: 'circle' | 'square'.
- `rounded` (optional): Whether the avatar should be rounded when shape is **square**. Default is 1/10 of size.
