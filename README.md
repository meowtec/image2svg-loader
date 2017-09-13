# image2svg-loader
Webpack loader for transforming image to svg (with embedded base64 image tag)

Normaly combined with svg-sprite-loader, which has [a bug](https://github.com/kisenka/svg-sprite-loader/issues/179) that can not handle PNG.

## Usage: 

```
{
  test: /\.(png)$/,
  use: [
    {
      loader: 'svg-sprite-loader',
      options: {
        symbolId: 'icon-[name]',
      },
    },
    'image2svg-loader',
  ],
  include: [
    /icons/,
  ],
},
```
