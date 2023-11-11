# Challenge specification
The challenge specification defines the information about the challenge, its
title, description, and even flags. The YAML format is used for challenges,
as it is simply readable by anyone, even if you don't understand the format's
specification.

## Example
This example shows how to define a challenge with all it needs
```yaml
title: 'Testing challenge'

# Short description is a short summary of what the challenge is about, It is
# shown in overviews and other places, where using the full description
# doesn't make sense
shortDescription: 'This is a description, that should be kept short'

# Theory is the story and explanation of the theme of this challenge, it can
# contain stories, hints and other methods to make the challenge easier to
# solve without knowing the theory from before.
# Because it can get really long, it has to be in a separate file, to which
# this property refers to
theory: './THEORY.md'

# Description is the full text shown to the user inside the challenge.
# Because it can get really long, it has to be in a separate file, to which
# this property refers to
description: './DESCRIPTION.md'

# Handbook is very simillar to the theory property, but it is not visible to
# students, so it can contain information like step-by-step guides how to
# solve the challenge, notes for the teacher how to explain the subject etc.
handbook: './HANDBOOK.md'

# This is the list of all services, that are exposed by the challenge
# Services are available on the challenge's IP address, which can be either
# IP inside VPN subnet or a public IP address
access:
  - type: "ssh"
    port: 22
    username: student
    password: heslo1234
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu
      > Citace třeba

  - type: "http"
    port: 80
    username: student
    password: heslo1234
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu
      > Citace třeba

  - type: "vnc"
    port: 5900
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu
      > Citace třeba

  - type: "rdp"
    port: 3389
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu
      > Citace třeba

  - type: "tcp"
    protocol: "minecraft"
    port: 12345
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu
      > Citace třeba
      
  - type: "udp"
    protocol: "minecraft"
    port: 12345
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu
      > Citace třeba

  - type: "other"
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu
      > Citace třeba

# This is the list of all flags, whether they are a static or dynamic text
# flag, select flag or an automatic command flag
flags:
  # Type 2 is a static text flag type
  - type: 2
    identifier: 'bobs-id'
    answer: '1003'
    maximumTries: 3

    name: 'What user id does bob have?'

    # Flag description is an inline markdown, that can include placeholders.
    # It is used as a full description of a flag, usually telling some extra
    # theory on top of what the challenge's theory offers.
    description: |
      There is a file in linux filesystem called `passwd` inside etc, it stores
      information about users - their ids, primary group id, home directory,
      username and their shell.

      It may look like this:
      ```
      root:x:0:0::/root:/bin/zsh
      bin:x:1:1::/:/usr/bin/nologin
      daemon:x:2:2::/:/usr/bin/nologin
      mail:x:8:12::/var/spool/mail:/usr/bin/nologin
      ftp:x:14:11::/srv/ftp:/usr/bin/nologin
      http:x:33:33::/srv/http:/usr/bin/nologin
      nobody:x:65534:65534:Nobody:/:/usr/bin/nologin
      ```

      Read the `/etc/passwd` file and find out which use id bob has.
    # Short description is a summary of the description, so fast students can
    # fast forward thorugh it
    shortDescription: 'Find what user id bob has by reading `/etc/passwd`'
  - type: 1
    maximumTries: 2
    identifier: 'flag.txt'
    # Instead of having a static answer, the value is dynamically generated
    # inside the challenge instance
    placeholder: 'root-flag'

    name: 'Get a flag from /flag.txt'

    # Description can be omitted
    shortDescription: 'There is a flag inside `/flag.txt`, read it and get the flag'
```
