<div class="flex flex-direction:column gap:15px width:100% min-width:500px@xs min-width:400px@2xs">
	<div class="w:100% mb:10px flex flex-direction:column gap:10px  ">
		<label for="title" class="f:20 mb:4px">Title</label>
		<input
			class="width:100% h:45px p:10px|8px border:none bg:whitesmoke color:black outline:none f:20 r:5"
			placeholder="Bringing the trash outside"
			name="title"
			id="title"
		/>
	</div>
	<div class="w:100% mb:10px flex flex-direction:column gap:10px">
		<label for="description" class="f:20 mb:4px">Beschreibung</label>
		<textarea
			class="w:100% h:90px resize:vertical mh:90px p:10px|8px border:none bg:whitesmoke color:black outline:none f:20 border-radius:5"
			placeholder="You have to take the trash and bring it outside or your life will be miserable"
			name="description"
			id="description"
		/>
	</div>
	<div class="w:100% mb:10px flex flex-direction:column gap:10px">
		<label for="due_at" class="f:20 ">Due At (optional)</label>
		<input
			type="datetime-local"
			class="width:100% h:45px p:10px|8px border:none bg:whitesmoke color:black outline:none f:20 border-radius:5"
			placeholder="Due at (optional)"
			id="due_at"
			name="due_at"
		/>
	</div>

	<div class="mt:20px w:100% h:45px border:none bg:var(--primary) r:5 color:black flex ai:center p:0|8px">
		<input
			type="submit"
			class="p:none w:100% h:100% bg:transparent text-align:left  border:none outline:none f:20"
			value="Submit new Todo"
		/>

		<span class="material-symbols-outlined"> arrow_forward_ios </span>
	</div>
</div>
