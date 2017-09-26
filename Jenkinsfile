node {
    stage('Preparation') {
        git 'https://github.com/jsamol/raspserver'
    }

    stage('Build') {
        sh "bin/raspserver --build"
    }

    stage('Start') {
        if (isUnix()) {
            sh "bin/raspserver --start"
        }
    }
}