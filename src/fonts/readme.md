The raw fonts supplied by our designers are not in wott2 format (which is a compressed and web optimized format).
I've manually compressed and converted the relevant font files. If you need to add any, or adjust the compression, here are the steps.

1. Install python's font tools with `pip install fonttools brotli zopfli``
2. Convert the font using the snippet below:
    ``` bash
    pyftsubset src/fonts/univers/UniversRegular.otf \
      --output-file=src/fonts-subset/univers/Univers-Regular-latin.woff2 \
      --flavor=woff2 \
      --unicodes="U+0020-007E, U+00A0-00FF, U+2000-206F, U+20A0-20CF" \ # Covers basic latin, basic accents, wider punctuation, and currency symbols
      --layout-features='*' \
      --no-hinting \ # Not required on modern screens and browsers
    ```
    If you find you're missing charachters, you probably need to tweak the unicodes range.