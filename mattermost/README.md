## Mattermost deployment using Datacol

[Mattermost](https://about.mattermost.com/) is a self-hosted, open-source alternative of Slack.Most of the code is taken from [mattermost-docker](https://github.com/mattermost/mattermost-docker) and changed to deploy on Kubernetes cluster using [Datacol](http://datacol.io).

The purpose of the project is to show how to deploy a real world application using [Datacol](http://datacol.io). We will use [CloudSQL](https://github.com/GoogleCloudPlatform/cloudsql-proxy) (MySQL) as database backend.

Here is a quick video of entire process -

[![asciicast](https://asciinema.org/a/10r6wpc15o8izsmpvh5sywcnk.png)](https://asciinema.org/a/10r6wpc15o8izsmpvh5sywcnk)

Follow the steps below to get up and running - 

#### Create a fresh stack

    datacol init —-project gcp-demo --stack=demo
    export STACK=demo

#### Clone the repo
    
    git clone https://github.com/datacol-io/mattermost.git && cd mattermost
    datacol apps create

#### Create a MySQL instance with CloudSQL

    datacol infra create mysql --name mysql-11111


### Set environment variables & Deploy

    datacol env set PORT=3000
    datacol deploy

### Link the mysql resource
  
    datacol infra link mysql-11111

If you have any questions, Please contact at [Datacol](http://datacol.io) or join our public [Slack channel](https://slackpass.io/datacol).


