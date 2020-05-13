# Copy your own template (CPT)

## Install
```
./install
```

## Usage

Run command like below. (auto-complete with bash/zsh supported. Type tab when you select template-name.)
```
$ cpt [template-name] [target directory path]  
```

### Copy files from templates 

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

### Add your template

Copy your templates 
```shell script
$ cp -r your-template-dir $CPT_ROOT/templates/
```
or
Clone from repository 
```shell script
$ git clone [repository-url] $CPT_ROOT/templates/
```

Then, you can copy your template by using cdk

### Exclude directories and files
Open `template.ignore` file.   
,and add directories and files which you wanto exclude  .
```shell script
vim $CPT_ROOT/template.ignore
```
As a default, excluded directories and files are below.

```
.git
.vscode
.idea
node_modules
dist
```
