# Description formatting
For various challenge fields (such as handbook, challenge description or flag
description), it is possible to use markdown formatting, so it is more
readable, as those descriptions can get really long.  
On top of markdown, haxagon allows you to use extra features such as an IP
placeholder, or an asciinema player.

In this page you will learn about our extensions to markdown, that you can use
and how to use them.

## The \<ip> placeholder
The IP placeholder is very simple, every `<ip>` in the description, gets
replaced with the challenge IP once it is started, if it isn't running, the ip
block will get replaced for `[ip]` text. 

## Asciinema player
Since most of our challenges need you to use the terminal, it might be necessary to teach people how to use some commands. With asciinema, you can add a video player-like terminal!  
Thanks to [`asciinema-ce`](https://github.com/haxagoncz/asciinema-ce) you can just insert an `<asciinema-player>` element into the markup and everything else will be handled for you.

```md
<asciinema-player src="28307"></asciinema-player>
```

The value in src is an id of a cast uploaded on https://asciinema.org/.
You can also define extra options with the `options` attribute. (A string with json encoded options) The options can be found [here](https://asciinema.org/docs/embedding)

## Conditional rendering
With the \<ip> placeholder, you might be wondering how to show your custom message when the challenge isn't running or doesn't have IP yet. That's where conditional rendering comes in, anything you put inside \<if> element that has a valid condition will only be shown if the condition is true.  
Currently you can only use that for challenge's IP.

```md
This is normal text
<if ip>
  This is only visible if the challenge has IP. (<ip>)
</if>
<if ip="false">
  This is shown if the challenge doesn't have IP.
  **You need to start the challenge before trying to connect**
</if>
<if ip="true">
  You can also use true, to only show when IP is defined.
</if>
```