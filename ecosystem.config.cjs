module.exports = {
    apps: [
        {
            name: "blog-frontend",
            cwd: "/var/www/jaubi.co.kr/blog/blog.frontend",
            script: "./node_modules/next/dist/bin/next",
            args: "start -p 3000 -H 127.0.0.1",
            exec_mode: "fork",
            instances: 1,
            autorestart: true,
            restart_delay: 3000,
            max_memory_restart: "700M",
            kill_timeout: 15000,
            time: true,
            env: {
                NODE_ENV: "production",
                PORT: "3000",
                HOSTNAME: "127.0.0.1",
            },
        },
    ],
};
