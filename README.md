# Copy your own template (CPT)

## How to install
```
./install
```

## How to use it

Run command like below. (auto-complete with bash/zsh supported. Type tab when you select template-name.)
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

## How to add your template

Deploy your templates 
```shell script
$ cp -r your-template-dir $CPT_ROOT/templates/
```

Then, you can copy your template by using cdk

```
$ mkdir sample
$ cd sample
$ cpt your-template-dir ./
```
