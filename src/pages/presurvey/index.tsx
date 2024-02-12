import { SyntheticEvent, useEffect, useState } from "react";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	Button,
	Box,
	Container,
	Typography,
	Paper,
} from "@mui/material";

interface FormContent {
	"radio-group-1": string;
	"radio-group-2": string;
	"radio-group-3": string;
	"radio-group-4": string;
	"radio-group-5": string;
}

const Presurvey = () => {
	const [data, setData] = useState<FormContent | null>();

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & {
			"radio-group-1": { value: string };
			"radio-group-2": { value: string };
			"radio-group-3": { value: string };
			"radio-group-4": { value: string };
			"radio-group-5": { value: string };
		};

		setData({
			"radio-group-1": target["radio-group-1"].value,
			"radio-group-2": target["radio-group-2"].value,
			"radio-group-3": target["radio-group-3"].value,
			"radio-group-4": target["radio-group-4"].value,
			"radio-group-5": target["radio-group-5"].value,
		});
	};

	useEffect(() => {
		//fetch data
		console.log(data);
	}, [data]);

	return (
		<Container>
			<Typography align="center" variant="h5" sx={{ m: 5 }}>
				Before moving on to tasks, <br /> Please answer the following questions
				to help us understand your experience related to the tasks.
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						1. In the past 12 months, how active were you on{" "}
						<b>data annotation tasks</b> -- labeling dataset with specific data
						fields -- on Upwork, Amazon MTurk, or any other crowdsorcing
						platforms?
					</FormLabel>
					<RadioGroup name="radio-group-1">
						<FormControlLabel
							label="No experience"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="A few times"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Once a month"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Once or twice a seek"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Once a week"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="More than once a week"
							control={<Radio />}
							value="6"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						2. In the past 12 months, how active were you on{" "}
						<b>data annotation tasks that require medical knowledge</b> on
						Upwork, Amazon MTurk, or any other crowdsorcing platforms?
					</FormLabel>
					<RadioGroup name="radio-group-2">
						<FormControlLabel
							label="No experience"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="A few times"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Once a month"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Once or twice a seek"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Once a week"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="More than once a week"
							control={<Radio />}
							value="6"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						3. How competent are you in identifying signs and symptoms
						terminologies?
					</FormLabel>
					<RadioGroup name="radio-group-3">
						<FormControlLabel
							label="Extremly incompetent"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Moderately incompetent"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Neither competent nor incompetent"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Moderately competent"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Extremly competent"
							control={<Radio />}
							value="5"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						4. How knowledgeable are you in identifying 7 classes below?
						<Paper sx={{ padding: 2 }} variant="outlined">
							<ul>
								<li> Clinical event</li>
								<li> Lab_value</li>
								<li> Sign_sympton</li>
								<li> Diagnostic_procedure</li>
								<li> Medication</li>
								<li> Biological structure</li>
								<li> Disease_disorder</li>
							</ul>
						</Paper>
					</FormLabel>
					<RadioGroup name="radio-group-4">
						<FormControlLabel
							label="Not knowledgeable at all"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Slightly knowledgeable"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Moderately knowledgeable"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Very knowledgeable"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Extremly knowledgeable"
							control={<Radio />}
							value="5"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						5. How competent are you in identifying diagnostic procedures?
					</FormLabel>
					<RadioGroup name="radio-group-5">
						<FormControlLabel
							label="Extremly incompetent"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Moderately incompetent"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Neither competent nor incompetent"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Moderately competent"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Extremly competent"
							control={<Radio />}
							value="5"
						/>
					</RadioGroup>
				</FormControl>
				<Button type="submit" variant="outlined" value="Submit">
					Submit
				</Button>
			</Box>
		</Container>
	);
};

export default Presurvey;
