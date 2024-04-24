# bun install
# bun run build
# bun run start

FROM oven/bun

#RUN bun install


COPY . /frontend
workdir /frontend/

# Change permissions of the files
RUN chmod -R 777 .

RUN bun install

# RUN bun run build

RUN bun run build

#List all the files in the current directory
RUN ls -la

EXPOSE 3000


CMD ["bun", "run", "start"]