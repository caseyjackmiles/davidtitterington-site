# davidtitterington-site

Code for the personal website of David Titterington.
Builds a static website with images and galleries.

Future plan is to add Netlify-CMS for content management.

## Technologies + frameworks

- Ruby 2.6
- Middleman
- Stimulus
- Slim & Haml templates
- SCSS

### Additional requirements

This project uses ImageMagick to generate thumbnails of images.
In order to build the project, ImageMagick must be installed.

## Structure

**source/**  
Haml templates for the pages of the site. Template files get their content from data-files.

**source/layouts**   
**source/partials**  
Slim template files for structural (non-content) parts of the site. There are currently two main types of page layouts, `default` and `gallery`.

**source/images**  
Image files for paintings. These are resized by the `middleman-simple-thumbnailer` extension.
These files are ignored by version control.

**data/**  
YAML files with data for website text, paintings, and galleries.
These files are ignored by version control.

## Usage

### Local preview

```
bundle exec middleman
```
Serves the code at http://localhost:4567. Refresh the page to see the effect of any code changes.

### Build

```
bundle exec middleman build
```

Build static files suitable for uploading to a webserver.
