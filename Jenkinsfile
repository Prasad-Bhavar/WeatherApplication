pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Prasad-Bhavar/WeatherApplication.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t weather-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop weather-container || true'
                sh 'docker rm weather-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 8082:80 --name weather-container weather-app'
            }
        }
    }
}
