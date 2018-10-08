https://harveywilliams.net/blog/installing-iisnode

- In IIS, ensure that folder has sufficient permissions to read/write.

- To enable windows auth, add the below snippet:

```
<system.web>
	<authentication mode="Windows" />
	<authorization> 
	<deny users="?" />
	</authorization>
</system.web>
```