# Copy your own template (CPT)

## How to install
```
./install
```

## How to use it

Run command like below
```
$ cpt [template-name] [target directory path]  
```

####  EXAMPLE

If you want to copy template to your-new-project directory,
please run command as follows

```
$ mkdir your-new-project
$ cd your-new-project
$ cpt sample-typescript-template ./
```
and file will be copied like below
```
$ ls -a
.                 .gitignore        dist              package-lock.json src
..                .idea             node_modules      package.json      tsconfig.json

```
