# Fusebox SCSS imports are not recursivly resolved

As per the definition of the [recursive node module resolution algorithm](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders), modules should be resolved recursivly. It means that any build tool should search for `node_modules` from source directory upwards.

This is working fine with javascript modules, but it fails with `SCSS` modules.

## Steps to reproduce

```
npm install
```
after which `lerna bootstrap` will be run, which will create a `node_modules` inside `packages/app` directory with symlinked sibling npm local packages.

Then, run
```
npm start
```
and you will notice the following output from FuseBox
```
Errors for app bundle
  → ERROR File to import not found or unreadable: ~scss-lib/main.scss.
Parent style sheet: <rootDir>/packages/app/app.scss
      at <rootDir>/packages/app/app.scss:1:1

```
